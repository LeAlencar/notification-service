import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['magical-osprey-12940-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'bWFnaWNhbC1vc3ByZXktMTI5NDAkPCskCBA-J7Z4HcpljIA-uzDKXR4BsbUmYig',
          password:
            '5IEsfMELaQn7Yc3mqhaQprhgKpssWGtmaJI5dp0YQPqY1Bx4y-W1YN3XNrL7TX1MT8Bggg==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
