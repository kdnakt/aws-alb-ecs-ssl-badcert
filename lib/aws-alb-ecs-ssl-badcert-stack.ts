import { Construct, Stack, StackProps } from '@aws-cdk/core';

import * as ecs from '@aws-cdk/aws-ecs';
import * as ecsp from '@aws-cdk/aws-ecs-patterns';
import * as acm from '@aws-cdk/aws-certificatemanager';
import * as route53 from "@aws-cdk/aws-route53";

export class AwsAlbEcsSslBadcertStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const baseDomain = this.node.tryGetContext('baseDomain');
    const domainName = this.node.tryGetContext('domainName');

    const hostedZone = route53.HostedZone.fromLookup(this, 'MyHostedZone', {
      domainName: baseDomain
    })

    const cert = new acm.DnsValidatedCertificate(this, 'MyAlbCert', {
      domainName: domainName,
      hostedZone: hostedZone,
      validation: acm.CertificateValidation.fromDns(hostedZone)
    });

    new ecsp.ApplicationLoadBalancedFargateService(this, 'MyWebServer', {
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
      },
      domainName: domainName,
      domainZone: hostedZone,
      certificate: cert,
      publicLoadBalancer: true
    });
  }
}