﻿using Gradio.Net.Enums;

namespace Gradio.Net;

public class Image : Component, IStreamingInput
{
    internal Image() { }
    internal ImageFormat Format { get;  set; }
    internal bool MirrorWebcam { get;  set; }
    internal ImageType Type { get;  set; }
    internal int? Height { get;  set; }
    internal int? Width { get;  set; }
    internal ImageMode ImageMode { get;  set; }
    internal IEnumerable<ImageSource> Sources { get;  set; }
    internal bool Streaming { get;  set; }
    internal bool ShowDownloadButton { get;  set; }
    internal bool? ShowShareButton { get;  set; }

    public void CheckStreamable()
    {
        //todo
    }

    internal override object PreProcess(object data)
    {
        string? str = data.ToString();

        FileData fileData = JsonUtils.Deserialize<FileData>(str);
        return fileData.Path;
    }

    internal override object PostProcess(string rootUrl, object data)
    {
        string? str = data.ToString();

        Context.DownloadableFiles.TryAdd(str, str);
        if (ClientUtils.IsUrl(str))
        {
            return new FileData { Path = null, Url = str };
        }
        
        return new FileData { Path = str, Url = $"{rootUrl}/file={str}" };
    }

    public static string Payload(object obj)
    {
        if (obj == null)
        {
            return null;
        }

        if (obj is string str)
        {
            return str;
        }

        throw new ArgumentException($"Payload Type expect string actual {obj.GetType()}");
    }
}
