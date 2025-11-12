import React from "react";
import css from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

const VoteStats: React.FC<VoteStatsProps> = ({
  votes,
  totalVotes,
  positiveRate,
}) => {
  return (
    <div className={css.section}>
      <h2 className={css.title}>Statistics</h2>
      <ul className={css.list}>
        <li className={css.item}>
          Good: <span className={css.value}>{votes.good}</span>
        </li>
        <li className={css.item}>
          Neutral: <span className={css.value}>{votes.neutral}</span>
        </li>
        <li className={css.item}>
          Bad: <span className={css.value}>{votes.bad}</span>
        </li>
        <li className={css.item}>
          Total: <span className={css.value}>{totalVotes}</span>
        </li>
        <li className={css.item}>
          Positive: <span className={css.value}>{positiveRate}%</span>
        </li>
      </ul>
    </div>
  );
};

export default VoteStats;
