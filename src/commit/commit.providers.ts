import { Injectable } from '@nestjs/common';
import { Commit } from './entities/commit.entity';

export const commitProviders = [
  {
    provide: 'CommitRepository',
    useValue: Commit,
  },
];
