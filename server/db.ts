import { Pool } from 'pg';

// new connection pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Fitness_App',
    password: 'getsugatensho',
    port: 5432,
})

export default pool;