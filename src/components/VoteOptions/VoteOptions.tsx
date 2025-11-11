import React from "react";
import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes.ts";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

const voteTypes: VoteType[] = ["good", "neutral", "bad"];

const VoteOptions: React.FC<VoteOptionsProps> = ({
  onVote,
  onReset,
  canReset,
}) => {
  return (
    <div className={css.container}>
      {voteTypes.map((type) => (
        <button key={type} className={css.button} onClick={() => onVote(type)}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}

      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default VoteOptions;
