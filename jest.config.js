export default {
        preset: "ts-jest",
        testEnvironment: "jsdom",
        setupFilesAfterEnv: ["./jest.setup.ts"],
        transform: {
                "^.+\\.(ts|tsx)$": "ts-jest",
        },
        moduleNameMapper: {
                "\\.(css|less)$": "identity-obj-proxy",
        },
};



//       preset: "ts-jest":

// ts-jestを使用してTypeScriptファイルをトランスパイルし、テストを実行するための設定です。これにより、TypeScriptで書かれたテストコードを実行できます。
// testEnvironment: "jsdom":

// テスト環境としてjsdomを使用する設定です。jsdomは、Node.js上で動作する軽量なブラウザ環境を提供し、ブラウザ依存のコードをテストするのに役立ちます。
// setupFilesAfterEnv: ["./jest.setup.ts"]:

// テスト環境がセットアップされた後に実行されるスクリプトファイルを指定します。この例では、jest.setup.tsファイルが実行されます。ここに、グローバルな設定やモックの初期化などを記述できます。
// transform: { "^.+\.(ts|tsx)$": "ts-jest" }:

// ファイルの変換ルールを指定します。ここでは、拡張子が.tsまたは.tsxのファイルをts-jestでトランスパイルするように設定しています。
// moduleNameMapper: { "\.(css|less)$": "identity-obj-proxy" }:

// モジュール名のマッピングを設定します。ここでは、CSSやLESSファイルをインポートする際にidentity-obj-proxyを使用してモックします。これにより、スタイルシートのインポートが原因でテストが失敗するのを防ぎます。

// import type {Config} from 'jest';

// const config: Config = {
//   verbose: true,
// };

// export default config;