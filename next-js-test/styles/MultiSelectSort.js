export default () => (
  <style jsx>{`
    .available-options,
    .selected-options {
      border: 3px solid #ccc;
      padding: 10px;
      border-radius: 3px;
    }

    .option {
      border: 3px solid #ccc;
      background: #eee;
      font-weight: 700;
      padding: 5px 10px;
      cursor: pointer;

    }

    .option + .option {
      margin-top: 5px;
    }

    .selected-option {
      cursor: -webkit-grab;
    }
  `}</style>
)