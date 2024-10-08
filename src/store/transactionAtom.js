import { atom } from 'jotai';
import { generateZeroProof } from '@/utils/send-data-backend';


export const receiverAtom = atom('');
export const amountAtom = atom('');
export const privateMessageAtom = atom('');
export const senderAtom = atom('');

const safeJSONParse = (str) => {
    try {
        return JSON.parse(str);
    } catch (e) {
        return null;
    }
};

// New atom for the entire transaction information, using localStorage
export const transactionsAtom = atom(
    safeJSONParse(localStorage.getItem('transactions')) || []
);

export const persistentTransactionsAtom = atom(
    (get) => get(transactionsAtom),
    (get, set, newTransaction) => {
        const currentTransactions = get(transactionsAtom);
        const updatedTransactions = [newTransaction, ...currentTransactions];
        set(transactionsAtom, updatedTransactions);
        localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
    }
);


// export const resetTransaction = atom('')

export const proofResponseAtom = atom(null);
export const isGeneratingProofAtom = atom(false);
export const proofErrorAtom = atom(null);

export const generateProofAtom = atom(
    null,
    async (get, set) => {
        const sender = get(senderAtom);
        const receiver = get(receiverAtom);
        const amount = get(amountAtom);
        const privateMessage = get(privateMessageAtom);

        set(isGeneratingProofAtom, true);
        set(proofErrorAtom, null);

        try {
            const response = await generateZeroProof(sender, receiver, amount, privateMessage);
            set(proofResponseAtom, response);
        } catch (error) {
            console.error("Error from store file", error);
            set(proofErrorAtom, error.message || "Failed to generate proof");
        } finally {
            set(isGeneratingProofAtom, false);
        }
    }
);

// export const resetTransactionStateAtom = atom(
//     null, // No need to read anything
//     (get, set) => {
//       set(receiverAtom, '');
//       set(amountAtom, '');
//       set(privateMessageAtom, '');
//       set(senderAtom, '');
//       set(proofResponseAtom, null);
//       set(proofErrorAtom, null);
//       set(isGeneratingProofAtom, false);
//     }
//   );
