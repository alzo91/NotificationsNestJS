### to study NestJS

1. Install cli
   - [x] npm i -g @nestjs/cli

2. Create new project
  - [x] nest new notifications

3. Understanding Imports, Controllers and Providers
   - [x]Imports, you must be import others modules. Example: src/app.controller.ts
   - [x] Controllers, It's possible abstract request and response from http
   - [x] providers, I belive that it is possible to affirm providers are repositorys, services, useCases

4. NestJS works inject dependences and invert.
   - [x] It's possible to see in src/mail or src/notification

5. Install Prisma ORM
   - [x] npm i prisma -D
   - [x] npm i @prisma@client
   - [x] npx prisma init --datasource-provider SQLite
   - [x] create a model in prisma/schema.prisma
   - [x] npx prisma migrate dev
   - [x] npx prisma studio

6. Working with validations
   - [x] npm i --save class-validator class-transformer
   - [x] add this command in main.ts app.useGlobalPipes(new ValidationPipe());
   - [x] create a model which will be responsable to validation
   - [x] I created src/notification/model/CreateNotification.ts
   - [x] Import from class-validator yours decorators that you will use.
   - [x] use you model in controller
   - [x] example: src/notification/notification.controller.ts
