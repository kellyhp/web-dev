import React from 'react';
import { TreeView, TreeItem } from '@mui/x-tree-view';
import { styled } from '@mui/system'; 
import { Close, Minus, Plus } from './TreeIcon.js';

const Root = styled('div')({
 
});

const StyledTreeView = styled(TreeView)({
  hover: '#rgba(0,0,0,0.35)',
  backgroundColor: 'none', 
  fontFamily: 'Montserrat, sans-serif', 
});

const StyledTreeItem = styled(TreeItem)({
  fontSize: '18px', 
  '& .MuiTreeItem-content': {
    padding: '16px', 
    fontFamily: 'Montserrat, sans-serif',
  },
});

export default function TreeQA() {
  const handleToggle = (event, nodeId) => {
    
  };

  return (
    <Root>
      <StyledTreeView
        defaultCollapseIcon={<Minus />}
        defaultExpandIcon={<Plus />}
        defaultEndIcon={<Close />}
        onNodeToggle={handleToggle}
      >
        <StyledTreeItem nodeId="1" label="Other Proficiencies" defaultExpanded>
          <StyledTreeItem nodeId="2" label="Soft Skills" >
            <StyledTreeItem nodeId="3" label="Communication"/>
            <StyledTreeItem nodeId="4" label="Leadership"/>
            <StyledTreeItem nodeId="5" label="Organization"/>
            <StyledTreeItem nodeId="6" label="Problem Solving"/>
          </StyledTreeItem>
          <StyledTreeItem nodeId="7" label="Spoken Languages" >
            <StyledTreeItem nodeId="8" label="English"/>
            <StyledTreeItem nodeId="9" label="Vietnamese"/>
            <StyledTreeItem nodeId="10" label="Japanese"/>
          </StyledTreeItem>
          <StyledTreeItem nodeId="11" label="Side Quest" >
            <StyledTreeItem nodeId="12" label="Soft Tofu Soup"/>
            <StyledTreeItem nodeId="13" label="Scallion Pancakes"/>
            <StyledTreeItem nodeId="14" label="Pepper Lunch"/>
          </StyledTreeItem>
          <StyledTreeItem nodeId="15" label={<span>🙀 Delivering Quality Keyboard ASMR videos</span>} />
        </StyledTreeItem>
      </StyledTreeView>
    </Root>
  );
}