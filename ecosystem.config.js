module.exports = {
    apps: [
        {
            name: 'FetchProxy',
            script: "bun",
            args: "src/main.ts",
            exec_mode: "fork",
            out_file: "./logs/out.log",
            error_file: "./logs/err.log",
            log_date_format: "YYYY-MM-DD HH:mm:ss"
        },
    ],
};
