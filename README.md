# Welcome to your CDK TypeScript project

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## How to Deploy

1. Run `cdk bootstrap aws://{AWS_ACCOUNT_ID}/ap-northeast-1` (First time only)

    e.g. `cdk bootstrap aws://123456789012/ap-northeast-1`

1. Run `cdk deploy`
