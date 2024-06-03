﻿using Gradio.Net.Enums;

namespace Gradio.Net;

public static partial class gr
{
    public static CheckboxGroup CheckboxGroup(
        IEnumerable<string> choices = null,
        object value = null,
       CheckboxGroupType type = CheckboxGroupType.Value,
       string label = null,
       string info = null,                       
        decimal? every = null,
        bool? showLabel = null,
        bool container = true,
        int? scale = null,
        int minWidth = 160,
        bool? interactive = null,
        bool visible = true,
        string elemId = null,
        IEnumerable<string> elemClasses = null,
        bool render = true
    )
    {
        CheckboxGroup block = new();
        block.Choices = choices;
        block.Type = type;
        
        block.Label = label;
        block.Info = info;
        block.Every = every;
        block.ShowLabel = showLabel;
        block.Container = container;
        block.Scale = scale;
        block.MinWidth = minWidth;
        block.Interactive = interactive;
        block.Visible = visible;
        block.ElemId = elemId;
        block.ElemClasses = elemClasses;
        block.Render = render;
        block.Value = value;
        
        Context.AddToCurrentBlocks(block);
        return block;
    }
}
