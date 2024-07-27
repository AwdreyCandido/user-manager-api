import mysql, { createConnection, Connection } from 'mysql2/promise';
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { createPool, Pool, PoolConnection } from 'mysql2/promise';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private pool: Pool;

  constructor() {
    this.pool = createPool(MYSQL_WEB_HOST_CONFIG);
  }

  async onModuleInit() {
    try {
      const connection = await this.pool.getConnection();
      connection.release();
      console.log('Connected to MySQL database');
    } catch (error) {
      console.error('Error connecting to MySQL database', error.stack);
    }
  }

  async onModuleDestroy() {
    await this.pool.end();
  }

  async getConnection(): Promise<PoolConnection> {
    return this.pool.getConnection();
  }
}

const MYSQL_WEB_HOST_CONFIG = {
  host: 'sql5.freemysqlhosting.net',
  user: 'sql5721754',
  password: 'bfxiPf7YLe',
  database: 'sql5721754',
  port: 3306,
  charset: 'utf8',
};

const MYSQL_LOCAL_CONFIG = {
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'users',
  port: 3306,
  charset: 'utf8',
};
