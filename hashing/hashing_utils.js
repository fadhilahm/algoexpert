module.exports = {
     hashString(string) {
        let hash = 0;
        if (string.length === 0) return hash;
        for (let i = 0; i < string.length; i++) {
            charCode = string.charCodeAt(i);
            hash = (hash << 5) - hash + charCode;
            hash |= 0;
        }
        return hash;
    },
    
    computeScore(username, server) {
        const usernameHash = this.hashString(username);
        const serverHash = this.hashString(server);
        return (usernameHash * 13 + serverHash * 11) % 67;
    }
}