import GetInfoUseCase from './getInfo'
import GetAnotherInfoUseCase from './getAnotherInfo'

export default {
    getInfo: GetInfoUseCase.execute,
    getAnotherInfo: GetAnotherInfoUseCase.execute
}