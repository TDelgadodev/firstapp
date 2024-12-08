import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloModule } from './hello/hello.module';
import { PrismaService } from './prisma/prisma.service';
import { PostController } from './post/post.controller';


@Module({
  imports: [TaskModule, ProjectsModule, AuthModule, UsersModule, HelloModule],
  providers: [PrismaService],
  controllers: [PostController],
})
export class AppModule {}
