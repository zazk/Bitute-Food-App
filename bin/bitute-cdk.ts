#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BituteCdkStack } from '../lib/bitute-cdk-stack';

const app = new cdk.App();
new BituteCdkStack(app, 'BituteCdkStack');
