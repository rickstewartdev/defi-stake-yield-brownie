import useEthers from "@usedapp/core"
import { utils } from "@usedapp/core/node_modules/ethers"
import { constants } from "ethers"
import TokenFarm from "../chain-info/contracts/TokenFarm.json"
import ERC20 from "../chain-info/contracts/MockERC20.json"
import { networkMapping } from "../chain-info/deployments/map.json"
import { Contract } from '@ethersproject/contracts'

export const useStakeTokens = (tokenAddress: string) {
    const { chainId } = useEthers()
    const { abi } = TokenFarm
    const tokenFarmAddress = chainId ? networkMapping[String(chainId)]["TokenFarm"][0] : constants.Adress
    const tokenFarmInterface = new utils.Interface(abi)
    const tokenFarmContract = new Contract(tokenFarmAddress, tokenFarmInterface)

    const erc20ABI = 
    const erc20Interface = new utils.Interface

}