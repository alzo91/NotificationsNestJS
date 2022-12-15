### to study NestJS

1. Install cli
   1.1 npm i -g @nestjs/cli

2. Create new project
   2.1 nest new notifications

3. Understanding Imports, Controllers and Providers
   3.1 Imports, you must be import others modules. Example: src/app.controller.ts
   3.2 Controllers, It's possible abstract request and response from http
   3.3 providers, I belive that it is possible to affirm providers are repositorys, services, useCases

4. NestJS works inject dependences and invert.
   4.1 It's possible to see in src/mail or src/notification

5. Install Prisma ORM
   5.1 npm i prisma -D
   5.2 npm i @prisma@client
   5.3 npx prisma init --datasource-provider SQLite
   5.4 create a model in prisma/schema.prisma
   5.5 npx prisma migrate dev
   5.6 npx prisma studio

6. Working with validations
   6.1 npm i --save class-validator class-transformer
   6.2 add this command in main.ts app.useGlobalPipes(new ValidationPipe());
   6.3 create a model which will be responsable to validation
   6.3.1 I created src/notification/model/CreateNotification.ts
   6.3.2 Import from class-validator yours decorators that you will use.
   6.4 use you model in controller
   6.4.1 example: src/notification/notification.controller.ts
