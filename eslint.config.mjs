import reearthConfig from "eslint-config-reearth";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  ...reearthConfig(),
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: ["dist/**", ".astro/**", "**/*.astro"],
  },
  {
    files: ["*.cjs", "*.mjs", "astro.config.mjs"],
    languageOptions: {
      globals: {
        process: true,
        URL: true,
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    files: ["**/*.astro"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-undef": "off",
    },
    languageOptions: {
      parserOptions: {
        project: null,
      },
    },
  },
];

/**
 * カスタマイズ内容:
 *
 * 1. 無視パターン
 *    - dist/**, .astro/** : ビルド成果物と生成ファイルを除外
 *    - *.astro : TypeScript 5.9.3 と @typescript-eslint の互換性問題により一時的に除外
 *
 * 2. ルール調整
 *    - @typescript-eslint/no-explicit-any : any 型の使用を許可
 *    - @typescript-eslint/no-unused-vars : アンダースコアで始まる未使用変数を許可
 *
 * 3. Astro ファイル向け設定（現在は除外されているため無効）
 *    - 未使用変数チェックを無効化
 *    - TypeScript プロジェクト参照を無効化
 *
 * 備考: 完全な lint を行うには TypeScript を 5.7.x にダウングレードを推奨
 */
