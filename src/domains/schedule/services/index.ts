import CreateUseCase from './create';
import OrchestatorUseCase from './orchestator';

export default {
  create: CreateUseCase.execute,
  orchestator: OrchestatorUseCase.execute,
};
