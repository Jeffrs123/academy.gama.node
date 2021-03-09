class ConfigResolver {

    static requestResolver(req) {

        switch (req.headers['x-persistence']) {
        case 'rest':
            return  {FILE: 'rest', URL: 'http://localhost:3030'};
            break;
        case 'mongodb':
            return  {FILE: 'mongodb', URL:  req.server.plugins['hapi-mongodb'].db};
            break;
        case 'h2':
            return  {FILE: 'h2', URL: 'http://localhost:8080/api/v1'};
            break;
        default:
            return  {FILE: 'mongodb', URL:  req.server.plugins['hapi-mongodb'].db};
        };
    }
}

module.exports = ConfigResolver;