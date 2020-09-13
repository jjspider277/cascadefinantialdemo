import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        accountNumber: null,
        initialBalance: 0,
        pendingBalance:0,
        settledBalance:0,
        endingBalance:0,
        transactions: 
            {
                "Statement": {
                    "Transactions": [{
                        "OriginalTraceAuditNo": null,
                        "AccountNumber": "123456789",
                        "TransactionTypeId": "Debit",
                        "TransactionDate": "2020-08-28T03:36:33",
                        "BusinessDate": "2020-08-28T03:36:33",
                        "AvailableBalance": 400.00,
                        "Amount": 12.08,
                        "Description": "Other: POS Transaction",
                        "Billed": false,
                        "MerchantName": "Good Buy",
                        "MerchantId": "GbLV-01"
                    },
                {
                        "OriginalTraceAuditNo": null,
                        "AccountNumber": "123456789",
                        "TransactionTypeId": "Debit",
                        "TransactionDate": "2020-08-28T03:50:01",
                        "BusinessDate": "2020-08-28T03:50:01",
                        "AvailableBalance": 400.00,
                        "Amount": 129.74,
                        "Description": "Other: POS Transaction",
                        "Billed": false,
                        "MerchantName": "Wally World",
                        "MerchantId": "WWV-000-1220"
                    },
                {
                        "OriginalTraceAuditNo": null,
                        "AccountNumber": "123456789",
                        "TransactionTypeId": "Debit",
                        "TransactionDate": "2020-08-28T06:43:12",
                        "BusinessDate": "2020-08-28T06:43:12",
                        "AvailableBalance": 400.00,
                        "Amount": 8.08,
                        "Description": "Other: POS Transaction",
                        "Billed": true,
                        "MerchantName": "Quickly Gas Stop",
                        "MerchantId": "QGS-01"
                    }],
                    "NotSettled": [{
                        "OriginalTraceAuditNo": null,
                        "AccountNumber": "123456789",
                        "TransactionTypeId": "Debit",
                        "TransactionDate": "2020-08-28T03:36:33",
                        "BusinessDate": "2020-08-28T03:36:33",
                        "AvailableBalance": 400.00,
                        "Amount": 12.08,
                        "Description": "Other: POS Transaction",
                        "MerchantName": "Good Buy",
                        "MerchantId": "GbLV-01"
                    },
                {
                        "OriginalTraceAuditNo": null,
                        "AccountNumber": "123456789",
                        "TransactionTypeId": "Debit",
                        "TransactionDate": "2020-08-28T03:50:01",
                        "BusinessDate": "2020-08-28T03:50:01",
                        "AvailableBalance": 400.00,
                        "Amount": 129.74,
                        "Description": "Other: POS Transaction",
                        "MerchantName": "Wally World",
                        "MerchantId": "WWV-000-1220"
                    }]
                }
            }
        ,
    },

    getters: {
        accountNumber: state => state.accountNumber,
        initialBalance: state => state.initialBalance,
        pendingBalance: state => state.pendingBalance,
        settledBalance: state => state.settledBalance,
        endingBalance: state => state.endingBalance,
        operations: state => state.transactions,
        transactions: state => state.transactions.Statement.Transactions,
        notSettled: state => state.transactions.Statement.NotSettled,
    },

    mutations: {
        FILL_INITIAL_BALANCE(state, balance) {
            state.initialBalance = balance
        },
        FILL_ENDING_BALANCE(state, balance) {
            state.endingBalance = balance
        },
        FILL_PENDING_BALANCE(state, balance) {
            state.pendingBalance = balance
        },
        FILL_SETTLED_BALANCE(state, balance) {
            state.settledBalance = balance
        },
        FILL_TRANSACTIONS(state, transactions) {
            state.transactions.Statement.Transactions = transactions;
        },
        FILL_ACCOUNT_NUMBER(state, accountNumber) {
            state.accountNumber = accountNumber;
        }
    },

    actions: {
        fillInitialBalance(ctx, initialBalance) {
            ctx.commit('FILL_INITIAL_BALANCE', initialBalance)
        },
        fillPendingBalance(ctx, pendingBalance) {
            ctx.commit('FILL_PENDING_BALANCE', pendingBalance)
        },
        fillSettledBalance(ctx, settledBalance) {
            ctx.commit('FILL_SETTLED_BALANCE', settledBalance)
        },
        fillEndingBalance(ctx, endingBalance) {
            ctx.commit('FILL_ENDING_BALANCE', endingBalance)
        },
        fillTransactions(ctx, transactions) {
            ctx.commit('FILL_TRANSACTIONS', transactions)
        },
        fillAccountNumber(ctx, account) {
            ctx.commit('FILL_ACCOUNT_NUMBER', account)
        }
     }
})