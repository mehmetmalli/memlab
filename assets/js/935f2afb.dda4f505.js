"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[53],{1109:s=>{s.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"sidebar":[{"type":"link","label":"Introduction","href":"/docs/intro","docId":"intro"},{"type":"link","label":"Installation","href":"/docs/installation","docId":"installation"},{"type":"link","label":"Getting Started","href":"/docs/getting-started","docId":"getting-started"},{"type":"link","label":"How memlab Works","href":"/docs/how-memlab-works","docId":"how-memlab-works"},{"type":"category","label":"API reference","collapsible":true,"items":[{"type":"link","label":"Table of contents","href":"/docs/api/","docId":"api/index"},{"type":"category","label":"Modules","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"api/src","href":"/docs/api/modules/api_src","docId":"api/modules/api_src"},{"type":"link","label":"heap-analysis/src","href":"/docs/api/modules/heap_analysis_src","docId":"api/modules/heap_analysis_src"}]},{"type":"category","label":"Classes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"BrowserInteractionResultReader","href":"/docs/api/classes/api_src.BrowserInteractionResultReader","docId":"api/classes/api_src.BrowserInteractionResultReader"},{"type":"link","label":"BaseAnalysis","href":"/docs/api/classes/heap_analysis_src.BaseAnalysis","docId":"api/classes/heap_analysis_src.BaseAnalysis"},{"type":"link","label":"CollectionsHoldingStaleAnalysis","href":"/docs/api/classes/heap_analysis_src.CollectionsHoldingStaleAnalysis","docId":"api/classes/heap_analysis_src.CollectionsHoldingStaleAnalysis"},{"type":"link","label":"DetachedDOMElementAnalysis","href":"/docs/api/classes/heap_analysis_src.DetachedDOMElementAnalysis","docId":"api/classes/heap_analysis_src.DetachedDOMElementAnalysis"},{"type":"link","label":"GlobalVariableAnalysis","href":"/docs/api/classes/heap_analysis_src.GlobalVariableAnalysis","docId":"api/classes/heap_analysis_src.GlobalVariableAnalysis"},{"type":"link","label":"ObjectFanoutAnalysis","href":"/docs/api/classes/heap_analysis_src.ObjectFanoutAnalysis","docId":"api/classes/heap_analysis_src.ObjectFanoutAnalysis"},{"type":"link","label":"ObjectShallowAnalysis","href":"/docs/api/classes/heap_analysis_src.ObjectShallowAnalysis","docId":"api/classes/heap_analysis_src.ObjectShallowAnalysis"},{"type":"link","label":"ObjectShapeAnalysis","href":"/docs/api/classes/heap_analysis_src.ObjectShapeAnalysis","docId":"api/classes/heap_analysis_src.ObjectShapeAnalysis"},{"type":"link","label":"ObjectSizeAnalysis","href":"/docs/api/classes/heap_analysis_src.ObjectSizeAnalysis","docId":"api/classes/heap_analysis_src.ObjectSizeAnalysis"},{"type":"link","label":"ObjectUnboundGrowthAnalysis","href":"/docs/api/classes/heap_analysis_src.ObjectUnboundGrowthAnalysis","docId":"api/classes/heap_analysis_src.ObjectUnboundGrowthAnalysis"},{"type":"link","label":"ShapeUnboundGrowthAnalysis","href":"/docs/api/classes/heap_analysis_src.ShapeUnboundGrowthAnalysis","docId":"api/classes/heap_analysis_src.ShapeUnboundGrowthAnalysis"},{"type":"link","label":"StringAnalysis","href":"/docs/api/classes/heap_analysis_src.StringAnalysis","docId":"api/classes/heap_analysis_src.StringAnalysis"}]}],"collapsed":true}]},"docs":{"api/classes/api_src.BrowserInteractionResultReader":{"id":"api/classes/api_src.BrowserInteractionResultReader","title":"Class: BrowserInteractionResultReader","description":"api/src.BrowserInteractionResultReader","sidebar":"sidebar"},"api/classes/heap_analysis_src.BaseAnalysis":{"id":"api/classes/heap_analysis_src.BaseAnalysis","title":"Class: BaseAnalysis","description":"heap-analysis/src.BaseAnalysis","sidebar":"sidebar"},"api/classes/heap_analysis_src.CollectionsHoldingStaleAnalysis":{"id":"api/classes/heap_analysis_src.CollectionsHoldingStaleAnalysis","title":"Class: CollectionsHoldingStaleAnalysis","description":"heap-analysis/src.CollectionsHoldingStaleAnalysis","sidebar":"sidebar"},"api/classes/heap_analysis_src.DetachedDOMElementAnalysis":{"id":"api/classes/heap_analysis_src.DetachedDOMElementAnalysis","title":"Class: DetachedDOMElementAnalysis","description":"heap-analysis/src.DetachedDOMElementAnalysis","sidebar":"sidebar"},"api/classes/heap_analysis_src.GlobalVariableAnalysis":{"id":"api/classes/heap_analysis_src.GlobalVariableAnalysis","title":"Class: GlobalVariableAnalysis","description":"heap-analysis/src.GlobalVariableAnalysis","sidebar":"sidebar"},"api/classes/heap_analysis_src.ObjectFanoutAnalysis":{"id":"api/classes/heap_analysis_src.ObjectFanoutAnalysis","title":"Class: ObjectFanoutAnalysis","description":"heap-analysis/src.ObjectFanoutAnalysis","sidebar":"sidebar"},"api/classes/heap_analysis_src.ObjectShallowAnalysis":{"id":"api/classes/heap_analysis_src.ObjectShallowAnalysis","title":"Class: ObjectShallowAnalysis","description":"heap-analysis/src.ObjectShallowAnalysis","sidebar":"sidebar"},"api/classes/heap_analysis_src.ObjectShapeAnalysis":{"id":"api/classes/heap_analysis_src.ObjectShapeAnalysis","title":"Class: ObjectShapeAnalysis","description":"heap-analysis/src.ObjectShapeAnalysis","sidebar":"sidebar"},"api/classes/heap_analysis_src.ObjectSizeAnalysis":{"id":"api/classes/heap_analysis_src.ObjectSizeAnalysis","title":"Class: ObjectSizeAnalysis","description":"heap-analysis/src.ObjectSizeAnalysis","sidebar":"sidebar"},"api/classes/heap_analysis_src.ObjectUnboundGrowthAnalysis":{"id":"api/classes/heap_analysis_src.ObjectUnboundGrowthAnalysis","title":"Class: ObjectUnboundGrowthAnalysis","description":"heap-analysis/src.ObjectUnboundGrowthAnalysis","sidebar":"sidebar"},"api/classes/heap_analysis_src.ShapeUnboundGrowthAnalysis":{"id":"api/classes/heap_analysis_src.ShapeUnboundGrowthAnalysis","title":"Class: ShapeUnboundGrowthAnalysis","description":"heap-analysis/src.ShapeUnboundGrowthAnalysis","sidebar":"sidebar"},"api/classes/heap_analysis_src.StringAnalysis":{"id":"api/classes/heap_analysis_src.StringAnalysis","title":"Class: StringAnalysis","description":"heap-analysis/src.StringAnalysis","sidebar":"sidebar"},"api/index":{"id":"api/index","title":"@memlab/monorepo","description":"Modules","sidebar":"sidebar"},"api/modules/api_src":{"id":"api/modules/api_src","title":"Module: api/src","description":"Classes","sidebar":"sidebar"},"api/modules/heap_analysis_src":{"id":"api/modules/heap_analysis_src","title":"Module: heap-analysis/src","description":"Classes","sidebar":"sidebar"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"In this section, you will learn how to use memlab to detect a memory leak. Please make sure you have completed a installation step in your local machine. We start with defining the scenario file where we specify how memlab should interact with our page.","sidebar":"sidebar"},"how-memlab-works":{"id":"how-memlab-works","title":"How memlab Works","description":"memlab decodes v8 (and hermes) heap snapshots and provides API that allows you to query JavaScript heap objects.","sidebar":"sidebar"},"installation":{"id":"installation","title":"Installation","description":"Prequisites","sidebar":"sidebar"},"intro":{"id":"intro","title":"Introduction","description":"Why did we build memlab?","sidebar":"sidebar"}}}')}}]);