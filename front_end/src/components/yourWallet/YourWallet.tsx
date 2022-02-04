import { Token } from "../Main"
import { Box } from "@material-ui/core"

interface YourWalletProps {
    supportedTokens: Array<Token>
}

export const YourWallet = ({ supportedTokens }: YourWalletProps) => {

    return (
        <Box>
            <h1> Your Wallet! </h1>
            <div>I'm your wallet!</div>
        </Box>
    )
}