class ColorGenerator {
	constructor() {
		/**
		 * White -> Gray -> Black
		 */
		this.colors1 = [
			"#F8F9FA",
			"#E9ECEF",
			"#DEE2E6",
			"#CED4DA",
			"#ADB5BD",
			"#6C757D",
			"#495057",
			"#343A40",
			"#212529",
		];

		/**
		 * Red -> Yellow -> Green -> Blue -> Dark Blue
		 */
		this.colors2 = ["#EF476F", "#FFD166", "#06D6A0", "#118AB2", "#073B4C"];

		/**
		 * Green -> Turquoise -> Yellow -> Light Red
		 */
		this.colors3 = ["#264653", "#2A9D8F", "#E9C46A", "#F4A261", "#E76F51"];

		/**
		 * Rainbow Color
		 */
		this.colors4 = [
			"#D00000",
			"#E85D04",
			"#FFEA00",
			"#2B9348",
			"#0096C7",
			"#03045E",
			"#7209B7",
		];

		/**
		 * Light Rainbow color
		 * 부드러운 색
		 */
		this.colors5 = [
			"#FFADAD",
			"#FFD6A5",
			"#FDFFB6",
			"#CAFFBF",
			"#9BF6FF",
			"#A0C4FF",
			"#BDB2FF",
			"#FFC6FF",
			"#FFFFFC",
		];

		/**
		 * Black -> Brown -> Red -> Yellow
		 */
		this.colors6 = [
			"#03071E",
			"#370617",
			"#6A040F",
			"#9D0208",
			"#D00000",
			"#DC2F02",
			"#E85D04",
			"#F48C06",
			"#FAA307",
			"#FFBA08",
		];

		/**
		 * Blue -> Purple -> Pink -> Red
		 */
		this.colors7 = [
			"#2D00F7",
			"#6A00F4",
			"#8900F2",
			"#A100F2",
			"#B100E8",
			"#BC00DD",
			"#D100D1",
			"#DB00B6",
			"#E500A4",
			"#F20089",
		];

		/**
		 * Dark Blue -> Blue -> Light Blue
		 */
		this.colors8 = [
			"#03045e",
			"#023e8a",
			"#0077b6",
			"#0096c7",
			"#00b4d8",
			"#48cae4",
			"#90e0ef",
			"#ade8f4",
			"#caf0f8",
		];

		/**
		 * Turquoise -> Blue-Green -> Purple
		 */
		this.colors9 = [
			"#006466",
			"#065A60",
			"#0B525B",
			"#144552",
			"#1B3A4B",
			"#212F45",
			"#272640",
			"#312244",
			"#3E1F47",
			"#4D194D",
		];

		/**
		 * Light brown -> brown
		 * gradual increase
		 */
		this.colors10 = [
			"#EDC4B3",
			"#E6B8A2",
			"#DEAB90",
			"#D69F7E",
			"#CD9777",
			"#C38E70",
			"#B07D62",
			"#9D6B53",
			"#8A5A44",
			"#774936",
		];

		/**
		 * Black -> Purple -> Light purple
		 */
		this.colors11 = [
			"#10002B",
			"#240046",
			"#3C096C",
			"#5A189A",
			"#7B2CBF",
			"#9D4EDD",
			"#C77DFF",
			"#E0AAFF",
		];
	}
}
