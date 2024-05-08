function Time({ ms, style }: { ms: number, style?: React.CSSProperties }) {
    return (
        <div className="time-container" style={style}><h2 className="center time">{msToString(ms)}</h2></div>
    );
}

function msToString(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export default Time;