import { config } from 'dotenv'
config();

export default  {
    port :   process.env.PORT || 1337,
    host:process.env.HOST||'localhost',
    database_uri : process.env.DATABASE_URI || '',
    marketDataFeedWsUrl: process.env.MARKET_DATA_FEED_WS_URL||'',
    bearerAccessToken: process.env.ACCESS_TOKEN||''
}