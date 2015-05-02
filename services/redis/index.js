'use strict';
import redis from 'redis';
import * as config from 'config';
import * as url from 'url';

let redisUrl = url.parse(config.redisURI);
let client = redis.createClient(redisUrl.port, redisUrl.hostname);

client.auth(redisUrl.auth.split(":")[1]);
export default client;
