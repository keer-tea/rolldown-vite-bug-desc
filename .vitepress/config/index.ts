import { defineConfig, UserConfig } from 'vitepress'

//#region 检测 rolldown-vite
import * as vite from 'vite'

if (vite.rolldownVersion) {
  // logic for rolldown-vite
  console.log('yes 是 rolldown-vite 版本')
} else {
  // logic for rollup-vite
  console.log('no 是 rollup-vite 版本')
}

//#endregion 检测 rolldown-vite

const userConfig: UserConfig = {
  srcDir: './src',
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'bar', link: '/test/+bar' },
          { text: 'foo', link: '/test/foo+' },
        ]
      }
    ]
  }
}

export default defineConfig(userConfig)
