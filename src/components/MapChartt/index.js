import { useEffect, useState } from 'react';
import axios from 'axios';
// import { MapChart } from 'echarts/charts';
import React from 'react';
import * as echarts from 'echarts/core';
// import 'echarts/map/js/world';

// Import bar charts, all suffixed with Chart
// import { BarChart } from 'echarts/charts';
import {
  LineChart,
  BarChart,
  PieChart,
  ScatterChart,
  RadarChart,
  MapChart,
  TreeChart,
  TreemapChart,
  GraphChart,
  GaugeChart,
  FunnelChart,
  ParallelChart,
  SankeyChart,
  BoxplotChart,
  CandlestickChart,
  EffectScatterChart,
  LinesChart,
  HeatmapChart,
  PictorialBarChart,
  ThemeRiverChart,
  SunburstChart,
  CustomChart,
} from 'echarts/charts';

// Import the tooltip, title, rectangular coordinate system, dataset and transform components
import {
  GridSimpleComponent,
  GridComponent,
  PolarComponent,
  RadarComponent,
  GeoComponent,
  SingleAxisComponent,
  ParallelComponent,
  CalendarComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  AxisPointerComponent,
  BrushComponent,
  TitleComponent,
  TimelineComponent,
  MarkPointComponent,
  MarkLineComponent,
  MarkAreaComponent,
  LegendComponent,
  LegendScrollComponent,
  LegendPlainComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
  AriaComponent,
  TransformComponent,
  DatasetComponent,
} from 'echarts/components';
// Features like Universal Transition and Label Layout
import { LabelLayout, UniversalTransition } from 'echarts/features';
import ReactEChartsCore from 'echarts-for-react/lib/core';
// Import the Canvas renderer
// Note that including the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from 'echarts/renderers';
// import geoJson from './geojson.json';
echarts.use([
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  MapChart,
  VisualMapComponent,
]);

const MapChartt = () => {
  const [geoJson, setGeoJson] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [map, setMap] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/JfrAziz/indonesia-district/master/id18_lampung/id1805_lampung_tengah/id1805_lampung_tengah.geojson'
        );

        setGeoJson(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const data = [
    { name: 'Bandar Jaya Barat', value: 7389849 },
    { name: 'Bandar Jaya Timur', value: 731449 },
    { name: 'Indra Putra Subing', value: 731449 },
    { name: 'Karang Endah', value: 8185867 },
    { name: 'Nambah Dadi', value: 6897012 },
    { name: 'Ono Harjo', value: 1855413 },
    { name: 'Poncowati', value: 5726398 },
    { name: 'Terbanggi Besar', value: 576412 },
    { name: 'Yukum Jaya', value: 3342 },
    { name: 'Adi Jaya', value: 334542 },
  ];

  echarts.registerMap('IDN', geoJson);

  const mapOption = {
    yAxis: {
      show: !map,
    },
    visualMap: {
      left: 'right',
      min: 500000,
      max: 38000000,
      inRange: {
        color: ['lightskyblue', 'yellow', 'orangered'],
      },
      text: ['High', 'Low'],
      calculable: true,
    },
    title: {
      text: 'Jumlah Pasien di Kabupaten Lampung Tengah (2023)',
      subtext: 'Data from www.bpjs-kesehatan.go.id',
      // sublink: 'http://www.census.gov/popest/data/datasets.html',
      left: 'right',
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
    },
    series: [
      {
        name: 'Pasien',
        id: 'population',
        type: 'map',
        roam: true,
        map: 'IDN',
        animationDurationUpdate: 900,
        universalTransition: true,
        nameProperty: 'village',
        data: data.sort(function (a, b) {
          return a.value - b.value;
        }),
      },
    ],
  };
  const barOption = {
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow',
      },
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      show: !map,
      type: 'category',
      // splitLine: {
      //   show: !map,
      // },
      // axisLine: {
      //   show: !map,
      // },
      // axisTick: {
      //   show: !map,
      // },
      axisLabel: {
        rotate: 30,
        // show: !map,
      },
      data: data.map(function (item) {
        return item.name;
      }),
    },
    animationDurationUpdate: 800,
    series: {
      type: 'bar',
      id: 'population',
      data: data.map(function (item) {
        return item.value;
      }),
      universalTransition: true,
    },
  };
  console.log(map, 'testing');

  // setInterval(function () {
  //   setMap(!map);
  // }, 5000);
  // const startLoading = () => {
  //   setMap(!map);
  // };

  // useEffect(() => {
  //   const interval = setInterval(startLoading, 2000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [map]);
  return (
    <div>
      {!isLoading ? (
        <ReactEChartsCore
          echarts={echarts}
          option={map ? mapOption : barOption}
          // notMerge={true}
          lazyUpdate={true}
          style={{ height: '905px', width: '1205px' }}
        />
      ) : (
        <p>Loading...</p>
      )}
      <button
        className='py-5 px-3 text center border '
        onClick={() => {
          setMap(!map);
        }}
      >
        clik ini
      </button>
    </div>
  );
};

export default MapChartt;
