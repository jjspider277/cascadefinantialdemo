<style scoped>
body {
  font-family: "lato", sans-serif;
}
.container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}

th {
  background-color: #95a5a6;
  padding: 20px;
  color: azure;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
td {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  padding-bottom: 5px;
}
</style>


<template>
  <div class="container">
    <h1>Activity for Account {{accountNumber}}</h1>
    <div>
      <h4>Initial Balance : {{initialBalance}}</h4>
    </div>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Merchant</th>
          <th>Transaction Type</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in (transactions)" :key="transaction.id">
          <td>{{ transaction.TransactionDate }}</td>
          <td>{{ transaction.MerchantName }}</td>
          <td>{{ transaction.TransactionTypeId }}</td>
          <td>{{ transaction.Amount }}</td>
          <td>{{ transaction.Billed == true ? "Settled" : "Pending" }}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <h4>Settled Balance : {{settledBalance}}</h4>
      <h4>Pending Balance : {{pendingBalance}}</h4>
      <h4>Ending Balance : {{endingBalance}}</h4>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TransactionFeed",
  data() {
    return {
      transaction: null,
    };
  },
  computed: {
    ...mapGetters([
      "transactions",
      "accountNumber",
      "initialBalance",
      "pendingBalance",
      "settledBalance",
      "endingBalance",
    ]),
  },
  mounted() {
    this.calculateBalances();
  },
  methods: {
    ...mapActions([
      "fillAccountNumber",
      "fillInitialBalance",
      "fillPendingBalance",
      "fillSettledBalance",
      "fillEndingBalance",
      "fillTransactions",
    ]),
    calculateBalances() {
      const sortedTransactions = this.transactions.sort(
        (b, a) => new Date(b.TransactionDate) - new Date(a.TransactionDate)
      );

      //Fill Account Number
      this.fillAccountNumber(sortedTransactions[0].AccountNumber);
      //Initial Balance taken from the first transaction ordered asc
      this.fillInitialBalance(sortedTransactions[0].AvailableBalance);

      // transactions ordered asc
      this.fillTransactions(sortedTransactions);

      //calculating pending amount
      let settledAmount = 0;
      let pendingAmount = 0;
      this.transactions.map(function (transaction) {
        if (transaction.Billed == false) {
          pendingAmount += parseFloat(transaction.Amount);
        } else {
          settledAmount += parseFloat(transaction.Amount);
        }
      });
      this.fillPendingBalance(pendingAmount.toFixed(2));

      this.fillSettledBalance(settledAmount.toFixed(2));

      let endingBalance =
        this.initialBalance - this.settledBalance - this.pendingBalance;
      this.fillEndingBalance(endingBalance.toFixed(2));
    },
  },
};
</script>
