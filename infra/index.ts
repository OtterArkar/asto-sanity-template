import * as cloudflare from "@pulumi/cloudflare";

const basicProject = new cloudflare.PagesProject("basic_project", {
  accountId: "30a736f6f10fe816424cc4edead1be36",
  name: "this-is-my-project-01",
  productionBranch: "main",
});
// Manage build config
const buildConfig = new cloudflare.PagesProject("build_config", {
  accountId: "30a736f6f10fe816424cc4edead1be36",
  buildConfig: {
    buildCommand: "npm run build",
    destinationDir: "build",
    rootDir: "/",
    webAnalyticsTag: "cee1c73f6e4743d0b5e6bb1a0bcaabcc",
    webAnalyticsToken: "021e1057c18547eca7b79f2516f06o7x",
  },
  name: "this-is-my-project-01",
  productionBranch: "main",
});
// Manage project source
const sourceConfig = new cloudflare.PagesProject("source_config", {
  accountId: "30a736f6f10fe816424cc4edead1be36",
  name: "this-is-my-project-01",
  productionBranch: "main",
  source: {
    config: {
      deploymentsEnabled: true,
      owner: "cloudflare",
      prCommentsEnabled: true,
      previewBranchExcludes: ["main", "prod"],
      previewBranchIncludes: ["dev", "preview"],
      previewDeploymentSetting: "custom",
      productionBranch: "main",
      productionDeploymentEnabled: true,
      repoName: "ninjakittens",
    },
    type: "github",
  },
});
// Manage deployment configs
const deploymentConfigs = new cloudflare.PagesProject("deployment_configs", {
  accountId: "30a736f6f10fe816424cc4edead1be36",
  deploymentConfigs: {
    preview: {
      compatibilityDate: "2022-08-15",
      compatibilityFlags: ["preview_flag"],
      d1Databases: {
        D1_BINDING: "445e2955-951a-4358-a35b-a4d0c813f63",
      },
      durableObjectNamespaces: {
        DO_BINDING: "5eb63bbbe01eeed093cb22bb8f5acdc3",
      },
      environmentVariables: {
        ENVIRONMENT: "preview",
      },
      kvNamespaces: {
        KV_BINDING: "5eb63bbbe01eeed093cb22bb8f5acdc3",
      },
      r2Buckets: {
        R2_BINDING: "some-bucket",
      },
    },
    production: {
      compatibilityDate: "2022-08-16",
      compatibilityFlags: ["production_flag", "second flag"],
      d1Databases: {
        D1_BINDING_1: "445e2955-951a-4358-a35b-a4d0c813f63",
        D1_BINDING_2: "a399414b-c697-409a-a688-377db6433cd9",
      },
      durableObjectNamespaces: {
        DO_BINDING_1: "5eb63bbbe01eeed093cb22bb8f5acdc3",
        DO_BINDING_2: "3cdca5f8bb22bc390deee10ebbb36be5",
      },
      environmentVariables: {
        ENVIRONMENT: "production",
        OTHER_VALUE: "other value",
      },
      kvNamespaces: {
        KV_BINDING_1: "5eb63bbbe01eeed093cb22bb8f5acdc3",
        KV_BINDING_2: "3cdca5f8bb22bc390deee10ebbb36be5",
      },
      r2Buckets: {
        R2_BINDING_1: "some-bucket",
        R2_BINDING_2: "other-bucket",
      },
    },
  },
  name: "this-is-my-project-01",
  productionBranch: "main",
});
