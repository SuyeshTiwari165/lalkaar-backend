module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_U38YZNDAP6XPbS5WcVfCqcfxQOrf/FcaOseihP1",
      apiToken: "HVD9DcywafMCsymic3ynTlbL",
      appFilter: "lalkaar-backend",
      teamFilter: "your-team-id-on-vercel",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
  
});
