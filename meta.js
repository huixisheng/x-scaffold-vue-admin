module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "Vue admin project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
  },
  "filters": {
    "node_modules/**/*": false
  },
  "skipInterpolation": "src/layouts/vue-element-admin/**/*",
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}yarn\n  npm run dev\nDocumentation can be found at https://github.com/huixisheng/x-scaffold-vue-webpack"
};