const outerInput = document.getElementById("outerInput");

function renderOuter() {
  const mode = document.getElementById("outerMode").value;
  if (mode === "door") {
    outerInput.innerHTML = `
      <label>大門／納氣方向（外卦）：</label>
      <select id="outer">
        ${Object.keys(TRIGRAMS).map(t => `<option>${t}</option>`).join("")}
      </select>
    `;
  } else {
    outerInput.innerHTML = `
      <label>居住者角色（外卦）：</label>
      <select id="outer">
        ${Object.entries(TRIGRAMS)
          .map(([k,v]) => `<option value="${k}">${v.role}</option>`)
          .join("")}
      </select>
    `;
  }
}

document.getElementById("outerMode").addEventListener("change", renderOuter);
renderOuter();

function calculate() {
  const outer = document.getElementById("outer").value;
  const inner = document.getElementById("inner").value;
  const hex = getHexagram(outer, inner);

  document.getElementById("result").textContent =
    `本卦：${hex.name}\n上卦：${hex.upper}\n下卦：${hex.lower}\n\n${hex.note}`;
}
