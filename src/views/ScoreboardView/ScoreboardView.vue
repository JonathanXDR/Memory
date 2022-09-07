<template>
  <div class="padding-4">
    <LoadingSpinner v-if="loading" />
    <div id="my-table" class="table table--responsive table--highlight">
      <h2 class="table__title">Scoreboard</h2>
      <div class="table__wrapper">
        <table>
          <thead>
            <tr>
              <th data-type="number" class="js-ascending">
                Rank
                <div class="arrow-icon"></div>
              </th>
              <th data-type="number" class="js-ascending">
                Username
                <div class="arrow-icon"></div>
              </th>
              <th data-type="number" class="js-ascending">
                Total score
                <div class="arrow-icon"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(result, index) in results" :key="index">
              <td>{{ result.rank }}#</td>
              <td>{{ result.userName }}</td>
              <td>{{ result.score }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script src="./ScoreboardView.ts" lang="ts"></script>
<style src="./ScoreboardView.css" />
