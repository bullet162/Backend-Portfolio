import { Test, TestingModule } from '@nestjs/testing';
import { JhersonInformationController } from './jherson-information.controller';

describe('JhersonInformationController', () => {
  let controller: JhersonInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JhersonInformationController],
    }).compile();

    controller = module.get<JhersonInformationController>(JhersonInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
