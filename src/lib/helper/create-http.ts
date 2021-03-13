export default (upstream: String, server: String) => `http {
        ${upstream}
        ${server}
    }`;
