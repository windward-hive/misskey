import $ from 'cafy';
import define from '../../define';
import networkChart from '../../../../chart/network';

export const meta = {
	stability: 'stable',

	desc: {
		'ja-JP': 'ネットワークのチャートを取得します。'
	},

	params: {
		span: {
			validator: $.str.or(['day', 'hour']),
			desc: {
				'ja-JP': '集計のスパン (day または hour)'
			}
		},

		limit: {
			validator: $.num.optional.range(1, 500),
			default: 30,
			desc: {
				'ja-JP': '最大数。例えば 30 を指定したとすると、スパンが"day"の場合は30日分のデータが、スパンが"hour"の場合は30時間分のデータが返ります。'
			}
		},
	}
};

export default define(meta, (ps) => new Promise(async (res, rej) => {
	const stats = await networkChart.getChart(ps.span as any, ps.limit);

	res(stats);
}));
