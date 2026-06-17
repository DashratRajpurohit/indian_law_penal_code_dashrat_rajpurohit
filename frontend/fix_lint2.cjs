const fs = require('fs');

function replaceInFile(filePath, replacements) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    for (let r of replacements) {
        content = content.replace(r.search, r.replace);
    }
    fs.writeFileSync(filePath, content);
}

replaceInFile('src/pages/Analytics.jsx', [
    {search: /const \[complexity, setComplexity\] = useState/g, replace: "const [complexity] = useState"},
    {search: /const \[systemKpis, setSystemKpis\] = useState/g, replace: "const [systemKpis] = useState"}
]);

replaceInFile('src/pages/CaseFiles.jsx', [
    {search: /const renderColumn = \(title, statusName, bgColor, borderColor\) => \{/g, replace: "const renderColumn = (title, statusName, bgColor) => {"}
]);

replaceInFile('src/pages/Dashboard.jsx', [
    {search: /const \{ user \} = useAuth\(\);/g, replace: "useAuth();"}
]);

replaceInFile('src/pages/LawsListing.jsx', [
    {search: /\} catch \{/g, replace: "} catch (err) {"},
    {search: /const handleOpenDossier = \(law\) => \{[\s\S]*?setDossierOpen\(true\);\n  \};\n/g, replace: ""}
]);

replaceInFile('src/pages/Login.jsx', [
    {search: /\} catch \{/g, replace: "} catch (err) {"}
]);

replaceInFile('src/pages/Register.jsx', [
    {search: /\} catch \{/g, replace: "} catch (err) {"},
    {search: /const \{ confirmPassword, \.\.\.registerPayload \} = values;/g, replace: "const { confirmPassword: _confirmPassword, ...registerPayload } = values;"}
]);

console.log("Fixes phase 2 applied");
