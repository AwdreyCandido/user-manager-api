import { Injectable, Logger } from '@nestjs/common';
import { createPool, Pool } from 'mysql2';
import mysql, { createConnection, Connection } from 'mysql2/promise';

@Injectable()
export class DatabaseService {
  private connection: Connection;

  constructor() {
    this.connect();
  }

  private async connect() {
    try {
      this.connection = await createConnection(MYSQL_LOCAL_CONFIG);
      console.log('Connected to MySQL database');
    } catch (error) {
      console.error('Error connecting to MySQL database', error.stack);
    }
  }

  getConnection(): Connection {
    return this.connection;
  }
}

const MYSQL_WEB_HOST_CONFIG = {
  host: 'sql5.freemysqlhosting.net',
  user: 'sql5721754',
  password: 'bfxiPf7YLe',
  database: 'sql5721754',
  port: 3306,
  charset: 'utf8',
  connectionLimit: 10,
};

const MYSQL_LOCAL_CONFIG = {
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'users',
  port: 3306,
  charset: 'utf8',
  connectionLimit: 10,
};
