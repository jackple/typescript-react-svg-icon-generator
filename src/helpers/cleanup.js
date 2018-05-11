module.exports.cleanupName = (name) => {
    return name.replace(/u[A-Z0-9]{4}-/, '');
};

module.exports.cleanupSvg = (svg) => {
    return svg
    .replace(/ width="[^"]*"/, '')
    .replace(/ height="[^"]*"/, '')
    .replace(/ fill="#?\w+"/g, '')
    .replace(/ fill-rule="#?\w+"/g, '')
    .replace(/ clip-rule="#?\w+"/g, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/ class="\w+"/g, '')
    .replace(/<style>.*<\/style>/g, match => match.replace(/<style>/g, '<style>{ `').replace(/<\/style>/g, '` }</style>'))
    .replace(/viewBox/, 'fill={color} height={height || size} width={width || size} onClick={onClick} style={style} className={className} viewBox');
};
