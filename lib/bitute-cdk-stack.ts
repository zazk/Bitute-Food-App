import { Stack, StackProps, aws_s3 as S3, aws_apigateway as Gateway, 
  aws_lambda as Lambda, aws_s3_deployment as S3Deploy,
  aws_cloudfront as CloudFront } from 'aws-cdk-lib';

import { Construct } from 'constructs';

export class BituteCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new S3.Bucket(this, 'BituteBucketImages', {
      encryption: S3.BucketEncryption.S3_MANAGED,
      publicReadAccess: true,
    })

    const bituteBucketWebApp = new S3.Bucket(this, 'BituteBucketWebApp', {
      encryption: S3.BucketEncryption.S3_MANAGED,
      publicReadAccess: true,
      websiteIndexDocument: 'index.html',
    })

    new S3Deploy.BucketDeployment(this, 'DeployBituteWebApp', {
      sources: [S3Deploy.Source.asset('./webapp/dist')],
      destinationBucket: bituteBucketWebApp,
    })

    const api = new Gateway.RestApi(this, 'bitute-api', {
      restApiName: 'Bitute API',
      description: 'This is the Bitute API',
    })

    const bituteLambda = new Lambda.Function(this, 'BituteLambda', {
      runtime: Lambda.Runtime.NODEJS_18_X,
      code: Lambda.Code.fromAsset('lambdas'),
      handler: 'index.handler',
    })

    new CloudFront.CloudFrontWebDistribution(this, 'BituteCloudFront', {
      originConfigs: [
        {
          s3OriginSource: {s3BucketSource: bituteBucketWebApp}, 
          behaviors: [{isDefaultBehavior: true}]}
      ]
    })

    const bituteLambdaIntegration = new Gateway.LambdaIntegration(bituteLambda)

    api.root.addMethod('GET', new Gateway.LambdaIntegration(bituteLambda))

  }
}
