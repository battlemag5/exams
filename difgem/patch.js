const fs = require('fs');
let content = fs.readFileSync('Answers_DiffGeom_2025_2026.md', 'utf8');
const oldText = `### 12. Символы Кристоффеля, их выражение через коэффициенты первой квадратичной формы.
Символы Кристоффеля $\\Gamma_{ij}^k$ определяются из соотношений $\\vec{r}_{ij} = \\Gamma_{ij}^k \\vec{r}_k + b_{ij} \\vec{n}$. 
Они выражаются через $g_{ij}$:
$$ \\Gamma_{ij}^k = \\frac{1}{2} g^{km} (\\partial_i g_{jm} + \\partial_j g_{im} - \\partial_m g_{ij}) $$`;
const newText = `### 12. Символы Кристоффеля, их выражение через коэффициенты первой квадратичной формы.
Символы Кристоффеля $\\Gamma_{ij}^k$ определяются из соотношений $\\vec{r}_{ij} = \\Gamma_{ij}^k \\vec{r}_k + b_{ij} \\vec{n}$. 
Они выражаются через $E, F, G$:
$$ \\Gamma_{11}^1 = \\frac{GE_u - 2FF_u + FE_v}{2(EG - F^2)}, \\quad \\Gamma_{11}^2 = \\frac{2EF_u - EE_v - FE_u}{2(EG - F^2)} $$
$$ \\Gamma_{12}^1 = \\Gamma_{21}^1 = \\frac{GE_v - FG_u}{2(EG - F^2)}, \\quad \\Gamma_{12}^2 = \\Gamma_{21}^2 = \\frac{EG_u - FE_v}{2(EG - F^2)} $$
$$ \\Gamma_{22}^1 = \\frac{2GF_v - GG_u - FG_v}{2(EG - F^2)}, \\quad \\Gamma_{22}^2 = \\frac{EG_v - 2FF_v + FG_u}{2(EG - F^2)} $$
(В тензорном виде: $\\Gamma_{ij}^k = \\frac{1}{2} g^{km} (\\partial_i g_{jm} + \\partial_j g_{im} - \\partial_m g_{ij})$)`;
content = content.replace(oldText, newText);
fs.writeFileSync('Answers_DiffGeom_2025_2026.md', content);
