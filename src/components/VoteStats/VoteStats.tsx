// src/components/VoteStats/VoteStats.tsx

import React from "react";
import css from "./VoteStats.module.css";

// Інтерфейс для пропсів
interface VoteStatsProps {
  votes: {
    good: number;
    neutral: number;
    bad: number;
  };
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
          Positive Feedback: <span className={css.value}>{positiveRate}%</span>
        </li>
      </ul>
    </div>
  );
};

export default VoteStats;
