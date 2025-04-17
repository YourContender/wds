import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import "../styles/stat.scss";

const stats = [
  { label: 'Satisfied clients', value: 97, suffix: '%' },
  { label: 'Projects completed', value: 150 },
  { label: 'Team of specialists', value: 12 },
  { label: 'Years on the market', value: 5 },
  { label: 'Regular clients', value: 45 },
  { label: 'Partners around the world', value: 18 },
];

export default function Stat() {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section className="stats-section" ref={ref}>
            <div className="container">
                <div className="stats-grid">
                {stats.map((item, index) => (
                    <div className="stat-card" key={index}>
                        <div className="stat-value">
                            {inView ? (
                            <CountUp
                                start={0}
                                end={item.value}
                                duration={2}
                                suffix={item.suffix || ''}
                            />
                            ) : (
                            '0' + (item.suffix || '')
                            )}
                        </div>
                        <div className="stat-label">{item.label}</div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}
