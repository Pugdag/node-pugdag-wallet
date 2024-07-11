import * as pugdagcore from '@pugdag/core-lib';
import { UnspentOutputInfo } from '../types/custom-types';
export declare class UnspentOutput extends pugdagcore.Transaction.UnspentOutput {
    blockDaaScore: number;
    scriptPublicKeyVersion: number;
    id: string;
    signatureOPCount: number;
    mass: number;
    isCoinbase: boolean;
    scriptPubKey: string;
    constructor(o: UnspentOutputInfo);
}
//# sourceMappingURL=unspent-output.d.ts.map