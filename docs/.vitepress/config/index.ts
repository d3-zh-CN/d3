import { defineConfig } from "vitepress";
import enConfig from "../config";
import zhConfig from "./zh-CN";

export default defineConfig({
  locales: {
    "zh-CN": { label: "简体中文", lang: "zh-CN", link: "/zh-CN/", ...zhConfig },
    root: { label: "English", lang: "en-US", link: "/", ...enConfig },
  },
});
