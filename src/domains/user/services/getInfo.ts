import User from '../entities/User'

export default class GetInfoUseCase {
    static execute = () => new User('Yvo', 'Rojas').getFullName()
}