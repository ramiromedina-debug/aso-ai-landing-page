import type { OpenNextConfig } from "@opennextjs/aws/types/open-next.js";
import defaultConfigFile from "@opennextjs/cloudflare/default-open-next.config.js";

const config: OpenNextConfig = {
  ...defaultConfigFile,
};

export default config;
